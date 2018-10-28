import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLooksElement
 * @class IconBaselineLooksElement
 * @extends {AoflElement}
 */
class IconBaselineLooksElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-looks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLooksElement.is, IconBaselineLooksElement);

export default IconBaselineLooksElement;
