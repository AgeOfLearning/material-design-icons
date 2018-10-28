import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderHorizontalElement
 * @class IconRoundBorderHorizontalElement
 * @extends {AoflElement}
 */
class IconRoundBorderHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderHorizontalElement.is, IconRoundBorderHorizontalElement);

export default IconRoundBorderHorizontalElement;
