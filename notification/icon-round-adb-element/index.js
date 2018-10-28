import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAdbElement
 * @class IconRoundAdbElement
 * @extends {AoflElement}
 */
class IconRoundAdbElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAdbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-adb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAdbElement.is, IconRoundAdbElement);

export default IconRoundAdbElement;
