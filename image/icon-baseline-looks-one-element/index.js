import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLooksOneElement
 * @class IconBaselineLooksOneElement
 * @extends {AoflElement}
 */
class IconBaselineLooksOneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLooksOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-looks-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLooksOneElement.is, IconBaselineLooksOneElement);

export default IconBaselineLooksOneElement;
