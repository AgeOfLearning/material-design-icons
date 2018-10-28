import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderAllElement
 * @class IconBaselineBorderAllElement
 * @extends {AoflElement}
 */
class IconBaselineBorderAllElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderAllElement.is, IconBaselineBorderAllElement);

export default IconBaselineBorderAllElement;
