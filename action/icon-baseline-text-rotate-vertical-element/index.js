import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTextRotateVerticalElement
 * @class IconBaselineTextRotateVerticalElement
 * @extends {AoflElement}
 */
class IconBaselineTextRotateVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTextRotateVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-text-rotate-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTextRotateVerticalElement.is, IconBaselineTextRotateVerticalElement);

export default IconBaselineTextRotateVerticalElement;
