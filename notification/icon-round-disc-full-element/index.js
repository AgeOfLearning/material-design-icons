import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDiscFullElement
 * @class IconRoundDiscFullElement
 * @extends {AoflElement}
 */
class IconRoundDiscFullElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDiscFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-disc-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDiscFullElement.is, IconRoundDiscFullElement);

export default IconRoundDiscFullElement;
