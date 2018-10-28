import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWorkOffElement
 * @class IconOutlineWorkOffElement
 * @extends {AoflElement}
 */
class IconOutlineWorkOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWorkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-work-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWorkOffElement.is, IconOutlineWorkOffElement);

export default IconOutlineWorkOffElement;
