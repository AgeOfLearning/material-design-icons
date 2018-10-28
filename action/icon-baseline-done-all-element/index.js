import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDoneAllElement
 * @class IconBaselineDoneAllElement
 * @extends {AoflElement}
 */
class IconBaselineDoneAllElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDoneAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-done-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDoneAllElement.is, IconBaselineDoneAllElement);

export default IconBaselineDoneAllElement;
