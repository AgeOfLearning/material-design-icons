import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFastRewindElement
 * @class IconSharpFastRewindElement
 * @extends {AoflElement}
 */
class IconSharpFastRewindElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFastRewindElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fast-rewind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFastRewindElement.is, IconSharpFastRewindElement);

export default IconSharpFastRewindElement;
