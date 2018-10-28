import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDoneElement
 * @class IconRoundDoneElement
 * @extends {AoflElement}
 */
class IconRoundDoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDoneElement.is, IconRoundDoneElement);

export default IconRoundDoneElement;
