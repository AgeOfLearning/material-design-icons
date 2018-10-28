import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewColumnElement
 * @class IconOutlineViewColumnElement
 * @extends {AoflElement}
 */
class IconOutlineViewColumnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewColumnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-column';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewColumnElement.is, IconOutlineViewColumnElement);

export default IconOutlineViewColumnElement;
