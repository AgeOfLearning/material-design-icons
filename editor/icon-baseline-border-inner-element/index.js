import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderInnerElement
 * @class IconBaselineBorderInnerElement
 * @extends {AoflElement}
 */
class IconBaselineBorderInnerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderInnerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-inner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderInnerElement.is, IconBaselineBorderInnerElement);

export default IconBaselineBorderInnerElement;
