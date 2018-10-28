import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderBottomElement
 * @class IconBaselineBorderBottomElement
 * @extends {AoflElement}
 */
class IconBaselineBorderBottomElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderBottomElement.is, IconBaselineBorderBottomElement);

export default IconBaselineBorderBottomElement;
