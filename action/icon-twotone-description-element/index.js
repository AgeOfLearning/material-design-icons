import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDescriptionElement
 * @class IconTwotoneDescriptionElement
 * @extends {AoflElement}
 */
class IconTwotoneDescriptionElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDescriptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-description';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDescriptionElement.is, IconTwotoneDescriptionElement);

export default IconTwotoneDescriptionElement;
