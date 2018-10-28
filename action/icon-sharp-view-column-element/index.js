import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewColumnElement
 * @class IconSharpViewColumnElement
 * @extends {AoflElement}
 */
class IconSharpViewColumnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewColumnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-column';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewColumnElement.is, IconSharpViewColumnElement);

export default IconSharpViewColumnElement;
