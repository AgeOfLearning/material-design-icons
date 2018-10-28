import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderVerticalElement
 * @class IconBaselineBorderVerticalElement
 * @extends {AoflElement}
 */
class IconBaselineBorderVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderVerticalElement.is, IconBaselineBorderVerticalElement);

export default IconBaselineBorderVerticalElement;
