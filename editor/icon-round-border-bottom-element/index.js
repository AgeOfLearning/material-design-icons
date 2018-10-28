import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderBottomElement
 * @class IconRoundBorderBottomElement
 * @extends {AoflElement}
 */
class IconRoundBorderBottomElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderBottomElement.is, IconRoundBorderBottomElement);

export default IconRoundBorderBottomElement;
