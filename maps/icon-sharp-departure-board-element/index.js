import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDepartureBoardElement
 * @class IconSharpDepartureBoardElement
 * @extends {AoflElement}
 */
class IconSharpDepartureBoardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDepartureBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-departure-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDepartureBoardElement.is, IconSharpDepartureBoardElement);

export default IconSharpDepartureBoardElement;
