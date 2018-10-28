import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCastForEducationElement
 * @class IconOutlineCastForEducationElement
 * @extends {AoflElement}
 */
class IconOutlineCastForEducationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCastForEducationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cast-for-education';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCastForEducationElement.is, IconOutlineCastForEducationElement);

export default IconOutlineCastForEducationElement;
