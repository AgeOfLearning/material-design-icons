import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWbIridescentElement
 * @class IconRoundWbIridescentElement
 * @extends {AoflElement}
 */
class IconRoundWbIridescentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWbIridescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wb-iridescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWbIridescentElement.is, IconRoundWbIridescentElement);

export default IconRoundWbIridescentElement;
