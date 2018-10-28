import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTrainElement
 * @class IconOutlineTrainElement
 * @extends {AoflElement}
 */
class IconOutlineTrainElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-train';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTrainElement.is, IconOutlineTrainElement);

export default IconOutlineTrainElement;
