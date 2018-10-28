import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCancelPresentationElement
 * @class IconOutlineCancelPresentationElement
 * @extends {AoflElement}
 */
class IconOutlineCancelPresentationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCancelPresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cancel-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCancelPresentationElement.is, IconOutlineCancelPresentationElement);

export default IconOutlineCancelPresentationElement;
