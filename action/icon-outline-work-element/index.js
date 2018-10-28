import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWorkElement
 * @class IconOutlineWorkElement
 * @extends {AoflElement}
 */
class IconOutlineWorkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWorkElement.is, IconOutlineWorkElement);

export default IconOutlineWorkElement;
