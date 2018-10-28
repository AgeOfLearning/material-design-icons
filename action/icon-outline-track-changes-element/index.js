import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTrackChangesElement
 * @class IconOutlineTrackChangesElement
 * @extends {AoflElement}
 */
class IconOutlineTrackChangesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTrackChangesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-track-changes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTrackChangesElement.is, IconOutlineTrackChangesElement);

export default IconOutlineTrackChangesElement;
