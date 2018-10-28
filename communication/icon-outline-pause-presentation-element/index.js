import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePausePresentationElement
 * @class IconOutlinePausePresentationElement
 * @extends {AoflElement}
 */
class IconOutlinePausePresentationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePausePresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pause-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePausePresentationElement.is, IconOutlinePausePresentationElement);

export default IconOutlinePausePresentationElement;
