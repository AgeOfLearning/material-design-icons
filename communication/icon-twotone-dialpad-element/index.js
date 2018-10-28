import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDialpadElement
 * @class IconTwotoneDialpadElement
 * @extends {AoflElement}
 */
class IconTwotoneDialpadElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDialpadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-dialpad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDialpadElement.is, IconTwotoneDialpadElement);

export default IconTwotoneDialpadElement;
