import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderInnerElement
 * @class IconRoundBorderInnerElement
 * @extends {AoflElement}
 */
class IconRoundBorderInnerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderInnerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-inner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderInnerElement.is, IconRoundBorderInnerElement);

export default IconRoundBorderInnerElement;
