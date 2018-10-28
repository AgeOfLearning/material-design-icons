import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderRightElement
 * @class IconBaselineBorderRightElement
 * @extends {AoflElement}
 */
class IconBaselineBorderRightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderRightElement.is, IconBaselineBorderRightElement);

export default IconBaselineBorderRightElement;
