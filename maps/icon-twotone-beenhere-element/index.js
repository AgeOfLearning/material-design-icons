import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBeenhereElement
 * @class IconTwotoneBeenhereElement
 * @extends {AoflElement}
 */
class IconTwotoneBeenhereElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBeenhereElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-beenhere';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBeenhereElement.is, IconTwotoneBeenhereElement);

export default IconTwotoneBeenhereElement;
