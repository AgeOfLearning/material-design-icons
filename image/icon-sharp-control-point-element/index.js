import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpControlPointElement
 * @class IconSharpControlPointElement
 * @extends {AoflElement}
 */
class IconSharpControlPointElement extends AoflElement {
  /**
   * Creates an instance of IconSharpControlPointElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-control-point';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpControlPointElement.is, IconSharpControlPointElement);

export default IconSharpControlPointElement;
