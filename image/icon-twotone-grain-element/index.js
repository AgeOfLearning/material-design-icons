import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGrainElement
 * @class IconTwotoneGrainElement
 * @extends {AoflElement}
 */
class IconTwotoneGrainElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-grain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGrainElement.is, IconTwotoneGrainElement);

export default IconTwotoneGrainElement;
