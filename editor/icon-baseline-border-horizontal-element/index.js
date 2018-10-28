import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderHorizontalElement
 * @class IconBaselineBorderHorizontalElement
 * @extends {AoflElement}
 */
class IconBaselineBorderHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderHorizontalElement.is, IconBaselineBorderHorizontalElement);

export default IconBaselineBorderHorizontalElement;
