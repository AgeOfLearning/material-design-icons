import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDraftsElement
 * @class IconOutlineDraftsElement
 * @extends {AoflElement}
 */
class IconOutlineDraftsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDraftsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-drafts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDraftsElement.is, IconOutlineDraftsElement);

export default IconOutlineDraftsElement;
