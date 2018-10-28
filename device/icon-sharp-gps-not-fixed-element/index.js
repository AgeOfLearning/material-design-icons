import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGpsNotFixedElement
 * @class IconSharpGpsNotFixedElement
 * @extends {AoflElement}
 */
class IconSharpGpsNotFixedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGpsNotFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-gps-not-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGpsNotFixedElement.is, IconSharpGpsNotFixedElement);

export default IconSharpGpsNotFixedElement;
