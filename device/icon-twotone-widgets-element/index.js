import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWidgetsElement
 * @class IconTwotoneWidgetsElement
 * @extends {AoflElement}
 */
class IconTwotoneWidgetsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWidgetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-widgets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWidgetsElement.is, IconTwotoneWidgetsElement);

export default IconTwotoneWidgetsElement;
