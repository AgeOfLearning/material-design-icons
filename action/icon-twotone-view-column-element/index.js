import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewColumnElement
 * @class IconTwotoneViewColumnElement
 * @extends {AoflElement}
 */
class IconTwotoneViewColumnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewColumnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-column';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewColumnElement.is, IconTwotoneViewColumnElement);

export default IconTwotoneViewColumnElement;
