import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTrackChangesElement
 * @class IconSharpTrackChangesElement
 * @extends {AoflElement}
 */
class IconSharpTrackChangesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTrackChangesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-track-changes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTrackChangesElement.is, IconSharpTrackChangesElement);

export default IconSharpTrackChangesElement;
