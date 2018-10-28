import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMoreVertElement
 * @class IconTwotoneMoreVertElement
 * @extends {AoflElement}
 */
class IconTwotoneMoreVertElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMoreVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-more-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMoreVertElement.is, IconTwotoneMoreVertElement);

export default IconTwotoneMoreVertElement;
