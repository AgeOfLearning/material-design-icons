import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTimelapseElement
 * @class IconSharpTimelapseElement
 * @extends {AoflElement}
 */
class IconSharpTimelapseElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTimelapseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-timelapse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTimelapseElement.is, IconSharpTimelapseElement);

export default IconSharpTimelapseElement;
