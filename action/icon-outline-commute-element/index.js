import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCommuteElement
 * @class IconOutlineCommuteElement
 * @extends {AoflElement}
 */
class IconOutlineCommuteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCommuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-commute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCommuteElement.is, IconOutlineCommuteElement);

export default IconOutlineCommuteElement;
