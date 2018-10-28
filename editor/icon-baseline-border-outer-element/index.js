import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderOuterElement
 * @class IconBaselineBorderOuterElement
 * @extends {AoflElement}
 */
class IconBaselineBorderOuterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderOuterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-outer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderOuterElement.is, IconBaselineBorderOuterElement);

export default IconBaselineBorderOuterElement;
