import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDraftsElement
 * @class IconTwotoneDraftsElement
 * @extends {AoflElement}
 */
class IconTwotoneDraftsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDraftsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-drafts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDraftsElement.is, IconTwotoneDraftsElement);

export default IconTwotoneDraftsElement;
