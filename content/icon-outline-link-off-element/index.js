import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLinkOffElement
 * @class IconOutlineLinkOffElement
 * @extends {AoflElement}
 */
class IconOutlineLinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-link-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLinkOffElement.is, IconOutlineLinkOffElement);

export default IconOutlineLinkOffElement;
