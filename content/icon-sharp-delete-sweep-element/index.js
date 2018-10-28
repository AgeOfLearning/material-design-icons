import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDeleteSweepElement
 * @class IconSharpDeleteSweepElement
 * @extends {AoflElement}
 */
class IconSharpDeleteSweepElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDeleteSweepElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-delete-sweep';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDeleteSweepElement.is, IconSharpDeleteSweepElement);

export default IconSharpDeleteSweepElement;
