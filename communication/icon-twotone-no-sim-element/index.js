import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNoSimElement
 * @class IconTwotoneNoSimElement
 * @extends {AoflElement}
 */
class IconTwotoneNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNoSimElement.is, IconTwotoneNoSimElement);

export default IconTwotoneNoSimElement;
