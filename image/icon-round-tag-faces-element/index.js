import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTagFacesElement
 * @class IconRoundTagFacesElement
 * @extends {AoflElement}
 */
class IconRoundTagFacesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTagFacesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tag-faces';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTagFacesElement.is, IconRoundTagFacesElement);

export default IconRoundTagFacesElement;
