import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSpeakerElement
 * @class IconSharpSpeakerElement
 * @extends {AoflElement}
 */
class IconSharpSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSpeakerElement.is, IconSharpSpeakerElement);

export default IconSharpSpeakerElement;
