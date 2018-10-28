import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePublishElement
 * @class IconOutlinePublishElement
 * @extends {AoflElement}
 */
class IconOutlinePublishElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePublishElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-publish';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePublishElement.is, IconOutlinePublishElement);

export default IconOutlinePublishElement;
