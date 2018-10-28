import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDeleteSweepElement
 * @class IconTwotoneDeleteSweepElement
 * @extends {AoflElement}
 */
class IconTwotoneDeleteSweepElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDeleteSweepElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-delete-sweep';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDeleteSweepElement.is, IconTwotoneDeleteSweepElement);

export default IconTwotoneDeleteSweepElement;
