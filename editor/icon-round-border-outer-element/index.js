import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderOuterElement
 * @class IconRoundBorderOuterElement
 * @extends {AoflElement}
 */
class IconRoundBorderOuterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderOuterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-outer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderOuterElement.is, IconRoundBorderOuterElement);

export default IconRoundBorderOuterElement;
